(c) 2019 Tomas Faflik

Usage

import { Messaging } from "../SharedModels/Messaging";


// subscribe (probably in constructor)

Messaging.subscribe("MyClass", "InterrestingMessage1", this.action.bind(this)); // dont forgot bind!


// sending notificaton

Messaging.notify("InterrestingMessage1", { message: "Hello world!" });

// unsubscribe
// 1) stop to listen specific message

Messaging.unsubscribe("MyClass", "InterrestingMessage1");

// 2) stop to listen all my messages (when "destructing" object)

Messaging.unsubscribe("MyClass");