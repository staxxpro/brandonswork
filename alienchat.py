# importing regex and random libraries
import re
import random

class AlienBot:
  # potential negative responses
  negative_responses = ("no", "nope", "nah", "naw", "not a chance", "sorry")
  # keywords for exiting the conversation
  exit_commands = ("quit", "pause", "exit", "goodbye", "bye", "later")
  # random starter questions
  random_questions = (
        "Why are you here? ",
        "Are there many humans like you? ",
        "What do you consume for sustenance? ",
        "Is there intelligent life on this planet? ",
        "Does Earth have a leader? ",
        "What planets have you visited? ",
        "What technology do you have on this planet? "
    )

  def __init__(self):
    self.alienbabble = {'describe_planet_intent': r'.*\s*your planet.*', 'answer_why_intent': r'why\sare.*', 'cubed_intent': r'.*cube.*(\d+)'}

  # Define .greet() below:
  def greet(self):
    self.name = input("Hello, what's your name? \n>")
    will_help = input(f"Hi {self.name}, I'm Etcetera. I'm not from this planet. Will you help me learn about your planet? ")
    if will_help in self.negative_responses:
      print("Ok, have a nice Earth day!")
      return
    self.chat()

  # Define .make_exit() here:
  def make_exit(self, reply):
    for exit_command in self.exit_commands:
      if reply == exit_command:
        print("Ok, have a nice Earth day!")
        return True

  # Define .chat() next:
  def chat(self):
    reply = input(random.choice(self.random_questions)).lower()
    while not self.make_exit(reply):
      reply = input(self.match_reply(reply))

  # Define .match_reply() below:
  def match_reply(self, reply):
    for key, value in self.alienbabble.items():
      intent, regex_pattern = key, value
     
      # 13 point to debug from
      found_match = re.match(regex_pattern, reply)
      if found_match and intent == 'describe_planet_intent':
        return self.describe_planet_intent()
      elif found_match and intent == 'answer_why_intent':
        return self.answer_why_intent()
      elif found_match and intent == 'cubed_intent':
        return self.cubed_intent(found_match.groups()[0])
      else:
        return self.no_match_intent()

  # Define .describe_planet_intent():
  def describe_planet_intent(self):
    responses = ("Oh hi there.", "I love cheese, I heard it is popular on your planet too.")
    return random.choice(responses)

  # Define .answer_why_intent():
  def answer_why_intent(self):
    responses = ("I come in peace.", "I am here to collect data on your planet and its inhabitants.", "I heard the coffee is good.")
    return random.choice(responses)
       
  # Define .cubed_intent():
  def cubed_intent(self, number):
    number = int(number)
    cubed_number = number * number * number
    return f"The cubed number of {number} is {cubed_number}."

  # Define .no_match_intent():
  def no_match_intent(self):
    responses = ("Please tell me more.",
      "Tell me more!",
      "Why do you say that?",
      "I see. Can you elaborate?", 
      "Interesting. Can you tell me more?",
      "I see. How do you think?",
      "Why?",
      "How do you think I feel when you say that?"
    )
    return random.choice(responses)

# Create an instance of AlienBot below:
my_bot = AlienBot()
my_bot.greet()