module.exports = Phrase;

// Reverse a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Return Username and Domain name
function emailParts(email) {
  return  email.split("@");
}
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Define a Phrase object.
function Phrase(content) {
  this.content = content;

  // Return a LOUDER version of the content.
  this.louder = function() {
    let louder = this.content.toUpperCase();
    return louder;
  }
  // Return lower case string for palindrome testing
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Return the letters in the content.
  // For Example :
  //  new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Return true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Return translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();