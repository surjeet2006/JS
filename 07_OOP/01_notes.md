# javascript is a prototype based;

JavaScript is prototype-based because objects can inherit properties and methods directly from other objects through a prototype chain, rather than requiring classes as the fundamental mechanism of inheritance.

# Prototype chain
A sequence of objects JavaScript searches through when looking for a property or method.

# In a traditional class-based language, you might think:

Class
  ↓
Object

For example:
    Person (class)
        ↓
    Rahul (object)

# In JavaScript, the fundamental relationship is:

    Object
      ↓
    Prototype object
      ↓
    Another prototype object
      ↓
    ..... 

    JavaScript is prototype-based because objects inherit behavior by being linked to other objects (their prototypes), and JavaScript's class syntax is built on top of that mechanism.