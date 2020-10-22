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
                                    "Single measurements": 5,
                                    "Mean of multiple measurements": 6
                                },
            "selection"       :   -1,
            "previous"      :   0,
            "results": -1
        },
        2: {
            "question"      :   "Does the model satisfy ANOVA assumption",
            "choices"       :   {
                                    "Yes": 3,
                                    "Not Anova": 9
                                },
            "selection"       :   -1,
            "previous"      :   0,
            "results": -1
        },
        3: {
            "question"      :   "How do raters read",
            "choices"       :   {
                                    "Same set of raters for all subjects": 7,
                                    "Each subject rated by different set of raters": -1
                                },
            "selection"       :   -1,
            "previous"      :   2,
            "results": -1
        },
        5 : {
            "results": "ICC(1,A)",
            "previous":   1
        },
        6 : {
            "results": "ICC(k,A)",
            "previous":   1
        },
        7: {
            "question"      :   "How are raters selected?",
            "choices"       :   {
                                    "Specific set of raters": 8,
                                    "Random set of raters": -1
                                },
            "selection"       :   -1,
            "previous"      :   3,
            "results": -1
        },
        8: {
            "question"      :   "How many raters",
            "choices"       :   {
                                    "Single": -1,
                                    "Multiple": -1
                                },
            "selection"       :   -1,
            "previous"      :   7,
            "results": -1
        },
        9 : {
            "results": "CCC",
            "previous":   2
        },
        
    };
