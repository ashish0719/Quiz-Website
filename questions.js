const questions = {
  sql: [
    {
      question: "Which SQL command is used to retrieve data from a database?",
      options: ["SELECT", "GET", "FETCH", "RETRIEVE"],
      correct: 0,
    },
    {
      question: "What does the WHERE clause do in SQL?",
      options: [
        "Sorts the results",
        "Filters the results",
        "Groups the results",
        "Joins tables",
      ],
      correct: 1,
    },
    {
      question: "Which SQL function is used to count the number of rows?",
      options: ["SUM()", "COUNT()", "TOTAL()", "NUM()"],
      correct: 1,
    },
    {
      question: "What is the correct syntax for creating a table in SQL?",
      options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
      correct: 1,
    },
    {
      question: "Which SQL clause is used to sort the result set?",
      options: ["SORT BY", "ORDER BY", "ARRANGE BY", "GROUP BY"],
      correct: 1,
    },
    {
      question: "What does INNER JOIN do?",
      options: [
        "Returns all rows from both tables",
        "Returns rows that have matching values in both tables",
        "Returns rows from the left table only",
        "Returns rows from the right table only",
      ],
      correct: 1,
    },
    {
      question: "Which SQL command is used to add new data to a table?",
      options: ["ADD", "INSERT", "APPEND", "CREATE"],
      correct: 1,
    },
    {
      question: "What is a PRIMARY KEY in SQL?",
      options: [
        "A key that opens the database",
        "A unique identifier for each row",
        "The first column in a table",
        "A password for the table",
      ],
      correct: 1,
    },
    {
      question: "Which SQL command is used to modify existing data?",
      options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
      correct: 2,
    },
    {
      question: "What does the GROUP BY clause do?",
      options: [
        "Groups rows that have the same values",
        "Groups tables together",
        "Groups columns together",
        "Groups databases together",
      ],
      correct: 0,
    },
  ],
  programming: [
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
    },
    {
      question:
        "Which data structure uses LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: 1,
    },
    {
      question: "What is recursion in programming?",
      options: [
        "A loop that never ends",
        "A function that calls itself",
        "A way to repeat code",
        "A type of variable",
      ],
      correct: 1,
    },
    {
      question:
        "Which sorting algorithm has the best average-case time complexity?",
      options: [
        "Bubble Sort",
        "Selection Sort",
        "Quick Sort",
        "Insertion Sort",
      ],
      correct: 2,
    },
    {
      question: "What is the purpose of a constructor in OOP?",
      options: [
        "To destroy objects",
        "To initialize objects",
        "To copy objects",
        "To compare objects",
      ],
      correct: 1,
    },
    {
      question: "Which of these is NOT a programming paradigm?",
      options: ["Object-Oriented", "Functional", "Procedural", "Sequential"],
      correct: 3,
    },
    {
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: [
        "No difference",
        "=== checks type and value, == only checks value",
        "== checks type and value, === only checks value",
        "=== is faster than ==",
      ],
      correct: 1,
    },
    {
      question: "What is Big O notation used for?",
      options: [
        "Measuring code quality",
        "Analyzing algorithm efficiency",
        "Counting lines of code",
        "Measuring memory usage only",
      ],
      correct: 1,
    },
    {
      question:
        "Which data structure is best for implementing a priority queue?",
      options: ["Array", "Linked List", "Heap", "Stack"],
      correct: 2,
    },
    {
      question: "What is polymorphism in OOP?",
      options: [
        "Having multiple constructors",
        "Objects taking multiple forms",
        "Using multiple inheritance",
        "Creating multiple objects",
      ],
      correct: 1,
    },
  ],
  networking: [
    {
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "High Transfer Text Protocol",
        "HyperText Transport Protocol",
        "High Text Transfer Protocol",
      ],
      correct: 0,
    },
    {
      question: "Which layer of the OSI model handles routing?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
      ],
      correct: 2,
    },
    {
      question: "What is the default port number for HTTP?",
      options: ["21", "23", "80", "443"],
      correct: 2,
    },
    {
      question: "What does DNS stand for?",
      options: [
        "Domain Name System",
        "Dynamic Network Service",
        "Data Network System",
        "Domain Network Service",
      ],
      correct: 0,
    },
    {
      question: "Which protocol is used for secure web browsing?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correct: 1,
    },
    {
      question: "What is the purpose of a subnet mask?",
      options: [
        "To hide network traffic",
        "To determine network and host portions of an IP address",
        "To encrypt data",
        "To compress data",
      ],
      correct: 1,
    },
    {
      question: "Which protocol is used for email transmission?",
      options: ["HTTP", "FTP", "SMTP", "DNS"],
      correct: 2,
    },
    {
      question: "What is the maximum number of hosts in a Class C network?",
      options: ["254", "256", "65534", "16777214"],
      correct: 0,
    },
    {
      question: "Which device operates at the Network Layer?",
      options: ["Hub", "Switch", "Router", "Repeater"],
      correct: 2,
    },
    {
      question: "What does TCP stand for?",
      options: [
        "Transfer Control Protocol",
        "Transmission Control Protocol",
        "Transport Control Protocol",
        "Transfer Communication Protocol",
      ],
      correct: 1,
    },
  ],
  os: [
    {
      question: "What is the main function of an operating system?",
      options: [
        "To run applications",
        "To manage hardware and software resources",
        "To provide internet access",
        "To create documents",
      ],
      correct: 1,
    },
    {
      question:
        "Which scheduling algorithm gives priority to the shortest job?",
      options: [
        "FIFO",
        "Round Robin",
        "SJF (Shortest Job First)",
        "Priority Scheduling",
      ],
      correct: 2,
    },
    {
      question: "What is virtual memory?",
      options: [
        "Memory that doesn't exist",
        "A technique that uses disk space as RAM",
        "Memory used by virtual machines",
        "Temporary memory",
      ],
      correct: 1,
    },
    {
      question: "What is a deadlock in operating systems?",
      options: [
        "When the system crashes",
        "When processes wait for each other indefinitely",
        "When memory is full",
        "When CPU usage is 100%",
      ],
      correct: 1,
    },
    {
      question: "Which of these is NOT a type of operating system?",
      options: ["Batch OS", "Real-time OS", "Distributed OS", "Virtual OS"],
      correct: 3,
    },
    {
      question: "What is the purpose of a file system?",
      options: [
        "To organize and store files",
        "To run programs",
        "To manage memory",
        "To handle network connections",
      ],
      correct: 0,
    },
    {
      question: "What is thrashing in an operating system?",
      options: [
        "Deleting files rapidly",
        "Excessive paging activity",
        "CPU overheating",
        "Network congestion",
      ],
      correct: 1,
    },
    {
      question: "Which command is used to list files in Unix/Linux?",
      options: ["dir", "list", "ls", "show"],
      correct: 2,
    },
    {
      question: "What is a process in an operating system?",
      options: [
        "A running program",
        "A file on disk",
        "A hardware component",
        "A network connection",
      ],
      correct: 0,
    },
    {
      question: "What does RAID stand for?",
      options: [
        "Random Array of Independent Disks",
        "Redundant Array of Independent Disks",
        "Rapid Access of Independent Disks",
        "Remote Array of Independent Disks",
      ],
      correct: 1,
    },
  ],
};
