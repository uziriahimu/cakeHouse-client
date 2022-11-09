import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <h1 className='text-2xl'><strong> Question-01:</strong> Difference between SQL and NoSQL</h1>
                <p> <strong>Answer:</strong> <br />
                    <strong>SQL:</strong><br />
                    1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
                    2.These databases have fixed or static or predefined schema <br />
                    3.These databases are not suited for hierarchical data storage. <br />
                    4.These databases are best suited for complex queries <br />
                    5.Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc <br />
                    <strong>NoSQl:</strong> <br />
                    1.Non-relational or distributed database system <br />
                    2.They have dynamic schema<br />
                    3.These databases are best suited for hierarchical data storage.<br />
                    4.These databases are not so good for complex queries <br />
                    5.Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc <br />
                </p>
            </div>

            <div>
                <h1 className='text-2xl'><strong> Question-02:</strong> What is JWT, and how does it work?</h1>
                <p> <strong>Answer:</strong> <br />
                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                </p>
            </div>
            <div>
                <h1 className='text-2xl'><strong> Question-03:</strong>  What is the difference between javascript and NodeJS?</h1>
                <p> <strong>Answer:</strong> <br />
                    <strong>javascript:</strong><br />
                    1.Javascript is a programming language that is used for writing scripts on the website. <br />
                    2.Javascript can only be run in the browsers. <br />
                    3.It is basically used on the client-side. <br />
                    4.Javascript is capable enough to add HTML and play with the DOM.  <br />
                    5.	Javascript is used in frontend development.<br />
                    <strong>NodeJS:</strong> <br />
                    1.NodeJS is a Javascript runtime environment.<br />
                    2.We can run Javascript outside the browser with the help of NodeJS.<br />
                    3.It is mostly used on the server-side.<br />
                    4.Nodejs does not have capability to add HTML tags. <br />
                    5.Nodejs is used in server-side development. <br />
                </p>
            </div>

            <div>
                <h1 className='text-2xl'><strong> Question-04:</strong>  How does NodeJS handle multiple requests at the same time?</h1>
                <p> <strong>Answer:</strong> <br />
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blog;