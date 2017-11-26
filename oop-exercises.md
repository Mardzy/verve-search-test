Todo Application

Todos
  |
Todo list ---> Task
    ^             |--->(create task)
    |             |
    |             |--->(delete task)
    |             |        
  (Update list)<==|--->(update task)

Cinema Ticket Booking System

Customer
  |  |->(sign up)     
  |  |              
  |  |->(log in)      
  |  |                
  |  |->(log out)            
  |  |
  |  |->(search movies)--|  
  |  |                   |
  |  |->(select movies)--|  
  |                      |
  |       Movie----------|
  |       |
  |        ---> Administrator
  |                        |
  |  (create film info) <--
  |                        |
  |  (delete film info) <--
  |                        |
  |  (update film info) <--
  |            
   -------> Book ticket
  |          |-->(Show Available seats)
  |          |
  |          |-->(Update Available seats)
  |
   ---> Payment
          |-->(Confirm payment)
          |
          |-->(Return change)
