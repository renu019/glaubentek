package com.glaubentek;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication(scanBasePackages = {"com.glaubentek"})
@EnableConfigurationProperties
public class GluabentekappApplication implements ApplicationRunner {
	
	private final Logger logger = LoggerFactory.getLogger(GluabentekappApplication.class);
	
	@Value("${server.port}")
    private String serverPort;
	
	public static void main(String[] args) throws Exception {
		SpringApplication.run(GluabentekappApplication.class, args);
	}
	
	@Override
    public void run(ApplicationArguments args) throws Exception {
        logger.info("Application started with command-line arguments: {}", Arrays.toString(args.getSourceArgs()));
        logger.info("NonOptionArgs: {}", args.getNonOptionArgs());
        logger.info("OptionNames: {}", args.getOptionNames());

        for (String name : args.getOptionNames()) {
            logger.info("arg-" + name + "=" + args.getOptionValues(name));
        }

        logger.info("Application is currently running on port  ::  "+serverPort);
    }
}
