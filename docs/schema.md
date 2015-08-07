
### User
first_name: string
middle_name: string
last_name: string
company: string
email_address:string

### Collection
collection_name: string # This is the abstraction of the "procurement." Consider questions to be underneath a collection

### Question
requester: User
question_title: string
question_text:string
tags:array of Tag
answer:Answer

### Tag
name: string

### Answer
answerer: User
question: Question
answer_text: string
status: Status

### Status
status_code: integer
status_title: string
status_description: string  # A human description of the status
