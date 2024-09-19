CREATE TABLE contact_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    content_question TEXT NOT NULL,
    postdate DATETIME(6) DEFAULT CURRENT_TIMESTAMP(6)
);