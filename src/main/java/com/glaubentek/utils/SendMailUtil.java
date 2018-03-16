package com.glaubentek.utils;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.glaubentek.pojo.MailContent;
import com.glaubentek.pojo.SikariaContent;

@Component
public class SendMailUtil {
	
	@Value("${mail.user.name}")
	public String from;
	
	@Value("${mail.user.pass}")
	public String pass;
	
	@Value("${mail.to}")
	public String mailTo;
	
	public String sendMail(MailContent mailContent) {
		
		        Properties props = System.getProperties();
		        String host = "smtp.gmail.com";
		        props.put("mail.smtp.starttls.enable", "true");
		        props.put("mail.smtp.host", host);
		        props.put("mail.smtp.user", from);
		        props.put("mail.smtp.password", pass);
		        props.put("mail.smtp.port", "587");
		        props.put("mail.smtp.auth", "true");
		        props.put("mail.smtp.ssl.trust", "*");
		        
		        String subject = mailContent.getSubject();
		        String contactFrom = "Contact mail from : " + mailContent.getEmail();
		        String messageBody = "name:"+mailContent.getName()+"\n"+
		        					"Message: "+mailContent.getMessage() + "\n" + contactFrom;
		        
		        Session session = Session.getDefaultInstance(props);
		        MimeMessage message = new MimeMessage(session);

		        try {
		            message.setFrom(new InternetAddress(from));
		            String[] to = mailTo.split(",");
		            InternetAddress[] toAddress = new InternetAddress[to.length];
		            // To get the array of addresses
		            for( int i = 0; i < to.length; i++ ) {
		                toAddress[i] = new InternetAddress(to[i]);
		            }

		            for( int i = 0; i < toAddress.length; i++) {
		                message.addRecipient(Message.RecipientType.TO, toAddress[i]);
		            }

		            message.setSubject(subject);
		            message.setText(messageBody);
		            Transport transport = session.getTransport("smtp");
		            transport.connect(host, from, pass);
		            transport.sendMessage(message, message.getAllRecipients());
		            transport.close();
		        }
		        catch (AddressException ae) {
		            ae.printStackTrace();
		        }
		        catch (MessagingException me) {
		            me.printStackTrace();
		        }
		
		return "success";
	}

	
	public String sendMailSikaria(SikariaContent mailContent) {
		System.out.println("mailContent  ::  "+mailContent.getCheckInDate());
        Properties props = System.getProperties();
        String host = "smtp.gmail.com";
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.user", from);
        props.put("mail.smtp.password", pass);
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.ssl.trust", "*");
        
        String subject = "SikariaHomes Booking Form";
      //  String contactFrom = "Contact mail from : " + mailContent.getEmail();
        String messageBody = "Sikaria Booking Form"+ "\n" +
        		"Name: "+mailContent.getName() + "\n" + 
       					 "Mobile: "+mailContent.getMobile()+"\n"+
        					 "Number of Rooms: "+mailContent.getRooms()+"\n"+
        					 "number of Persons: "+mailContent.getPersons()+"\n"+
        					 "check in Date : "+mailContent.getCheckInDate()+"\n"+
        					 "check out date: "+mailContent.getCheckOutDate()+"\n"+
        					 "number of childrens: "+mailContent.getChildrens()+"\n"+
        					 "Type of rooms: "+mailContent.getTypeOfRooms()+"\n"+
        					 "Message: "+mailContent.getMessage()+"\n"
        					 ;
        System.out.println("message  ::  "+messageBody);
        Session session = Session.getDefaultInstance(props);
        MimeMessage message = new MimeMessage(session);

        try {
            message.setFrom(new InternetAddress(from));
            
            String[] to = mailTo.split(",");
            
            InternetAddress[] toAddress = new InternetAddress[to.length];

            // To get the array of addresses
            for( int i = 0; i < to.length; i++ ) {
                toAddress[i] = new InternetAddress(to[i]);
            }

            for( int i = 0; i < toAddress.length; i++) {
                message.addRecipient(Message.RecipientType.TO, toAddress[i]);
            }

            message.setSubject(subject);
            message.setText(messageBody);
            Transport transport = session.getTransport("smtp");
            transport.connect(host, from, pass);
            transport.sendMessage(message, message.getAllRecipients());
            transport.close();
        }
        catch (AddressException ae) {
            ae.printStackTrace();
        }
        catch (MessagingException me) {
            me.printStackTrace();
        }

return "success";
}

	
}
