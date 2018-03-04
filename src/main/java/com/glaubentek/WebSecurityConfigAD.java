package com.glaubentek;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import com.glaubentek.utils.EncryptDecryptUtil;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class WebSecurityConfigAD extends WebSecurityConfigurerAdapter {
	
	@Autowired
    @Qualifier("customUserDetailsService")
    private UserDetailsService userDetailsService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http
	      .headers()
	      .contentSecurityPolicy("default-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' *.googleapis.com; img-src 'self' 'unsafe-inline'; child-src 'self' 'unsafe-inline' data:; font-src 'self' 'unsafe-inline' *.gstatic.com; frame-src 'self' 'unsafe-inline' *").and()
			 .frameOptions()
			 .sameOrigin()
			   .httpStrictTransportSecurity().disable()
	      .and()
	      .authorizeRequests()
	      .antMatchers("/createPost/**", "/editPost/**", "/listAllPosts/**", "/post/**", "/deletePost/**", "/allUsers/**", "/user/**", 
	    		  		"/listAllUsers/**", "/editUser/**", "/createUser/**", "/deleteUser/**", "/tenderAlert/**").access("hasRole('ADMIN')")
          .antMatchers("/", "/admin/", "/home/**", "/aboutus/**", "/services/**", "/portfolio/**", "/blog/**", "/blogItem/**", "/sikariaHome/**", "/contactus/**",
        		  		"/allPosts/**","/the_post/**","/postByMonth/**","/recentPosts/**", "/tagAndCount/**", "/sendMail/**", "/sendMailSikaria/**",
        		  		"/getUsername/**", "/userRole/**",
        		  		"/resources/**", "/static/**").permitAll()
          .anyRequest().authenticated()
          .and()
      .formLogin()
          .loginPage("/login").defaultSuccessUrl("/admin")
          .permitAll()
          .and()
      .logout()
      	.permitAll().and()
      	.csrf().csrfTokenRepository(csrfTokenRepository())
        .and()
        .addFilterAfter(csrfHeaderFilter(), CsrfFilter.class)
        .authorizeRequests();

	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		//web.ignoring().antMatchers("/*");
		//web.ignoring().antMatchers("/*.js");
	}
	
	 @Autowired
	    public void configureGlobalSecurity(AuthenticationManagerBuilder auth) throws Exception {
		 	auth.authenticationProvider(authenticationProvider());
	 }
	     
	     
	     
	    @Bean
	    public AuthenticationProvider authenticationProvider() {
	        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
	        authenticationProvider.setUserDetailsService(userDetailsService);
	        //authenticationProvider.setPasswordEncoder(new EncryptDecryptUtil());
	        return authenticationProvider;	
	    }
	
	private Filter csrfHeaderFilter() {
        return new OncePerRequestFilter() {
			
			@Override
			protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
					throws ServletException, IOException {
				CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
                if (csrf != null) {
                    Cookie cookie = WebUtils.getCookie(request, "XSRF-TOKEN");
                    String token = csrf.getToken();
                    if (cookie == null || token != null && !token.equals(cookie.getValue())) {
                        cookie = new Cookie("XSRF-TOKEN", token);
                        cookie.setPath("/");
                        //cookie.setHttpOnly(true);
                        response.addCookie(cookie);
                    }
                }
                filterChain.doFilter(request, response);
				
			}
		};
    }

    private CsrfTokenRepository csrfTokenRepository() {
        HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
        repository.setHeaderName("X-XSRF-TOKEN");
        return repository;
    }
	
}