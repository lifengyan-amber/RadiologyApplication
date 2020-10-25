var quiz = {
        0 : {
            "question"      :   "What kind of reliability you wish to explore?",
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
                                    "Each subject rated by different set of raters": 10
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
                                    "Random set of raters": 13
                                },
            "selection"       :   -1,
            "previous"      :   3,
            "results": -1
        },
        8: {
            "question"      :   "How many raters",
            "choices"       :   {
                                    "Single": 20,
                                    "Multiple": 21
                                },
            "selection"       :   -1,
            "previous"      :   7,
            "results": -1
        },
        9 : {
            "results": "CCC",
            "previous":   2
        },
        10: {
            "question"      :   "How many raters",
            "choices"       :   {
                                    "Single": 11,
                                    "Multiple": 12
                                },
            "selection"       :   -1,
            "previous"      :   3,
            "results": -1
        },
        11 : {
            "results": "ICC(1,1,A)",
            "previous":   10
        },
        12 : {
            "results": "ICC(1,k,A)",
            "previous":   10
        },
        13: {
            "question"      :   "How many raters",
            "choices"       :   {
                                    "Single": 14,
                                    "Multiple": 15
                                },
            "selection"       :   -1,
            "previous"      :   7,
            "results": -1
        }, 
        14: {
            "question"      :   "Agreement or consistency?",
            "choices"       :   {
                                    "Agreement": 16,
                                    "Consistency": 17
                                },
            "selection"       :   -1,
            "previous"      :   13,
            "results": -1
        },
        15: {
            "question"      :   "Agreement or consistency?",
            "choices"       :   {
                                    "Agreement": 18,
                                    "Consistency": 19
                                },
            "selection"       :   -1,
            "previous"      :   13,
            "results": -1
        },
        16 : {
            "results": "ICC(2,1,A)",
            "previous":   14
        },
        17 : {
            "results": "ICC(1,C)",
            "previous":   14
        },
        18 : {
            "results": "ICC(2,k,A)",
            "previous":   15
        },
        19 : {
            "results": "ICC(k,C)",
            "previous":   15
        },
        20: {
            "question"      :   "Agreement or consistency?",
            "choices"       :   {
                                    "Agreement": 22,
                                    "Consistency": 23
                                },
            "selection"       :   -1,
            "previous"      :   8,
            "results": -1
        },
        21: {
            "question"      :   "Agreement or consistency?",
            "choices"       :   {
                                    "Agreement": 24,
                                    "Consistency": 25
                                },
            "selection"       :   -1,
            "previous"      :   8,
            "results": -1
        }, 
        22 : {
            "results": "ICC(1,A)",
            "previous":   20
        },
        23 : {
            "results": "ICC(3,1,C)",
            "previous":   20
        },
        24 : {
            "results": "ICC(k,A)",
            "previous":   21
        },
        25 : {
            "results": "ICC(3,k,C)",
            "previous":   21
        }

    };
