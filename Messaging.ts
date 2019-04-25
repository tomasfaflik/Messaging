export class Messaging {
    
    private _subscription: {[mesage: string]: Array<{ key: string, fcn: (input: any) => void }>} = {};

    public subscribe(key: string, message: string, callback: (input: any) => void) {
        if (this._subscription[message] === undefined) {
            this._subscription[message] = [];
        }

        // remove listener in case if it is active (with same key)
        this._subscription[message] = this._subscription[message].filter(function(x) { return x.key !== key; });
        this._subscription[message].push({ key: key, fcn: callback });
    }
    
    public unsubscribe(key: string, message: string | null = null) {
        if (message !== null) {
            // remove listener by specific message
            this._unsubscribe(key, message);
        } else {
            // remove all listeners
            for (let messageVals in this._subscription) {
                this._unsubscribe(key, messageVals);
            }
        }
        
    }

    private _unsubscribe(key: string, message: string) {
        if (this._subscription[message] !== undefined) {
            this._subscription[message] = this._subscription[message].filter(function(x) { return x.key !== key; });
        }
    }

    public notify(message: string, object: any) {
        if (this._subscription[message] === undefined) return;

        this._subscription[message].map(function(x) {
            x.fcn(object);
        });
        
        console.log(message);
    }

    
    // -------------------------
    // -- Singleton structure --
    // -------------------------

    private static _instance: Messaging;
    static get instance(): Messaging {
        if (!this._instance) {
            this._instance = new Messaging();
        }

        return this._instance;
    }

    static notify(message: string, object: any) {
        this.instance.notify(message, object);
    }

    static subscribe(key: string, message: string, callback: (input: any) => void) {
        this.instance.subscribe(key, message, callback);
    }

    static unsubscribe(key: string, message: string | null = null) {
        this.instance.unsubscribe(key, message);
    }
}