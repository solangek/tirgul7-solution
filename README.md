# enhanced : add-servlet-client + add-servlet-rest

A REACT client implementation a servlet REST client computing the
sum of two numbers and returning the result and an array of history previous computations.

The server returns a json object such as:
<pre>{ lastResult: 10, history: ["2+3=5", "44+3=47"] }</pre>

The react client includes a form to perform the computation
and display the result and the history.

<h2>Installation and execution</h2>
<h3>Server configuration</h3>
First execute the server: use the IntelliJ configuration play button  (tomcat) to compile and run.
At this point you can test the server at the URL:
<pre>http://localhost:8080/add?left=2&right=4</pre>
<h3>Client configuration</h3>
To execute the client, open the <b>terminal</b> inside IntelliJ and type:
<ol>
<li>cd add-servlet-client</li>
<li>npm install</li>
<li>npm start</li>
</ol>

Your browser should open a new tab at the URL:
<pre>http://localhost:3000/</pre>

Et voilà!
