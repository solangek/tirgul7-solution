package hac;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionListener;

@WebListener
/**
 * Application Lifecycle Listener implementation class MySessionListener
 */
public class MySessionListener implements HttpSessionListener {
    /**
     * we initialize the session data with an instance of the HistoryData class
     * @param evt
     */
    public void sessionCreated(javax.servlet.http.HttpSessionEvent evt) {
        System.out.println("Creating the user session data");
        HistoryData jsonData = new HistoryData();
        evt.getSession().setAttribute("jsonData", jsonData);
    }

    public void sessionDestroyed(javax.servlet.http.HttpSessionEvent evt) {
        System.out.println("MySessionListener.sessionDestroyed");
    }
}


