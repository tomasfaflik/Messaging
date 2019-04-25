(c) 2019 Tomas Faflik

Usage

import { Messaging } from "../SharedModels/Messaging";


// subscribe (probably in constructor)

Messaging.subscribe("MyClass", "InterestingMessage", this.action.bind(this)); // dont forget bind!


// sending notificaton

Messaging.notify("InterestingMessage", { message: "Hello world!" });

// unsubscribe
// 1) stop to listen specific message

Messaging.unsubscribe("MyClass", "InterestingMessage");

// 2) stop to listen all my messages (when "destructing" object)

Messaging.unsubscribe("MyClass");