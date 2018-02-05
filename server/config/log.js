export default {
    "appenders": {
        "access": {
            "type": "dateFile",
            "filename": "log/access-",
            "pattern": "yyyy-MM-dd.log",
            "alwaysIncludePattern": true
        },
        "rule-console": {
            "type": "console",
            replaceConsole: true
        },
        "rule-file": {
            "type": "dateFile",
            "filename": "log/server-",
            "encoding": "utf-8",
            "maxLogSize": 10000000,
            "numBackups": 3,
            "pattern": "yyyy-MM-dd.log",
            "alwaysIncludePattern": true
        },
        "rule-error": {
            "type": "dateFile",
            "filename": "log/error-",
            "encoding": "utf-8",
            "maxLogSize": 1000000,
            "numBackups": 3,
            "pattern": "yyyy-MM-dd.log",
            "alwaysIncludePattern": true
        }
    },
    "categories": {
        "default": {
            "appenders": [
                "rule-console",
                "rule-file",
                "rule-error"
            ],
            "level": "debug"
        },
        "http": {
            "appenders": [
                'access',
                'rule-console'
            ],
            "level": "all"
        },
        error: {
            appenders: [
                'rule-error'
            ],
            level: 'error'
        }
    }
};
