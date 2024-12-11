package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/simple-page")
public class SimpleHtmlServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Simple HTML Page</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Welcome to My Simple HTML Page</h1>");
        out.println("<p>This page was generated using a Java Servlet!</p>");
        out.println("<ul>");
        out.println("    <li>Item 1</li>");
        out.println("    <li>Item 2</li>");
        out.println("    <li>Item 3</li>");
        out.println("</ul>");
        out.println("</body>");
        out.println("</html>");
    }
} 