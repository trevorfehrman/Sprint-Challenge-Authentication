<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

I RESTful APIs are stateless; their end points are like pure functions. Plainly, an endpoint built in this paradigm has no way of knowing whether two separate requests are
from two different users, or two repeated requests from one users. By instantiating a session we can keep track of a user's identity and thus provide them with
customized content.

2. What does bcrypt do to help us store passwords in a secure manner.

It hashes them. It utilizses an algorithm (which needs a key) that takes in a password, for example, and outputs a scrambled set of characters. The server can store this
hash and then when a user enters their password again bycript can use the same algorithm and key to hash the incoming string again. If the two hashes match the user is authenticated.
Note this is distinct from encryption. At no point is the users password "decrypted". Two hashes created in exactly the same way are compared for equality.

3. What does bcrypt do to slow down attackers?

Salt rounds. It hashes the hash, then hashes that hash and so on. This way even if an attack has access to the algorithm used to hash it would make it more computationally
expensive to brute force a list of common passwords.

4. What are the three parts of the JSON Web Token?

The header, payload, and signiture. The header carries metadata, the payload carries our claims, and the signature which is the hash of the first two.
