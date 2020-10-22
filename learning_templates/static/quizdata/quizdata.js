var quiz = {
        0 : {
            "question"      :   "What kind of variable are you working with?",
            "choices"       :   {
                                    "Intrarater Reliability": 1,
                                    "Interrater Reliability": 2
                                },
            "selection"     :   -1,
            "previous"      :   -1,
            "results": -1

        },
        1: {
            "question"      :   "What kind of measurements do you use",
            "choices"       :   {
                                    "Single": 5,
                                    "Multiple": 6
                                },
            "selection"       :   -1,
            "previous"      :   0,
            "results": -1
        },
        2: {
            "question"      :   "What kind of model do you use",
            "choices"       :   {
                                    "ANOVA": 3,
                                    "Not Anova": 0
                                },
            "selection"       :   -1,
            "previous"      :   0,
            "results": -1
        },
        3: {
            "question"      :   "How do raters read",
            "choices"       :   {
                                    "Same set": 5,
                                    "Multiple": 6
                                },
            "selection"       :   -1,
            "previous"      :   2,
            "results": -1
        },
        5 : {
            "results": "ICC(k,A)",
            "previous":   1
        },
        6 : {
            "results": "ICC(1,A)",
            "previous":   1
        }
    };
