# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import os



# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
TWILIO_AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
TWILIO_ACCOUNT_SID = os.environ['TWILIO_ACCOUNT_SID']
client = Client(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN)

message = client.messages.create(
                              body='This will be the body of the new message!',
                              from_='+18888147157',
                              to='+18642021100'
                          )

print(message.sid)
