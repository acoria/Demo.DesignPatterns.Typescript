"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Analog_1 = require("./environments/Analog");
var Digital_1 = require("./environments/Digital");
var Audiobook_1 = require("./mediums/Audiobook");
var Book_1 = require("./mediums/Book");
var digitalBook = new Book_1.default(new Digital_1.default());
digitalBook.getCover();
digitalBook.goToPosition(5);
var analogAudiobook = new Audiobook_1.default(new Analog_1.default());
analogAudiobook.getCover();
analogAudiobook.goToPosition(10);
//# sourceMappingURL=App.js.map