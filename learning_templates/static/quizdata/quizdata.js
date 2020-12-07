var quiz = {
        0 : {
            "question"      :   "What type of variables are you working with?",
            "choices"       :   {
                                    "Multicategorical Data: for example, Likert scale level of assessment confidence": 28,
                                    "Binary Data: for example, yes or no": 27,
                                    "Continuous Variable: for example, measuring Carotid Vessel Wall Volume": 26,
                                },
            "selection"     :   -1,
            "previous"      :   -1,
            "results": -1

        },
        
        26 : {
            "question"      :   "What kind of reliability do you wish to explore?",
            "choices"       :   {
                                    "Intrarater Reliability: reliability within the same rater": 1,
                                    "Interrater Reliability: relatbility between different raters": 2
                                },
            "selection"     :   -1,
            "previous"      :   0,
            "results": -1

        },
        1: {
            "question"      :   "What kind of measurements do you use?",
            "choices"       :   {
                                    "Single measurements: This ICC is an index for the reliability of the ratings for one, typical, single rater.": 5,
                                    "Mean of Multiple Measurements: This ICC is an index for the reliability of different raters averaged together. This ICC is always higher than the Single measures ICC.": 6
                                },
            "selection"       :   -1,
            "previous"      :   26,
            "results": -1
        },
        2: {
            "question"      :   "Does the model satisfy ANOVA assumption?",
            "choices"       :   {
                                    "Yes: The data are independent, the responses for each factor level have a normal distribution, with same mean and variance.": 3,
                                    "No: The assumptions above not satisfied.": 9
                                },
            "selection"       :   -1,
            "previous"      :   26,
            "results": -1
        },
        3: {
            "question"      :   "How do raters read?",
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
            "previous":   1,
            "link": "icc1A"
        },
        6 : {
            "results": "ICC(k,A)",
            "previous":   1,
            "link": "icckA"
        },
        7: {
            "question"      :   "How are raters selected?",
            "choices"       :   {
                                    "Specific set of raters": 8,
                                    "Raters are randomly selected": 13
                                },
            "selection"       :   -1,
            "previous"      :   3,
            "results": -1
        },
        8: {
            "question"      :   "What kind of measurements do you use?",
            "choices"       :   {
                                    "Single measurements: this ICC is an index for the reliability of the ratings for one, typical, single rater.": 20,
                                    "Mean of multiple measurements: this ICC is an index for the reliability of different raters averaged together. This ICC is always higher than the Single measures ICC.": 21
                                },
            "selection"       :   -1,
            "previous"      :   7,
            "results": -1
        },
        9 : {
            "results": "CCC",
            "previous":   2,
            "link": "ccc"
        },
        10: {
            "question"      :   "What kind of measurements do you use?",
            "choices"       :   {
                                    "Single measurements: this ICC is an index for the reliability of the ratings for one, typical, single rater.": 11,
                                    "Mean of multiple measurements: this ICC is an index for the reliability of different raters averaged together. This ICC is always higher than the Single measures ICC.": 12
                                },
            "selection"       :   -1,
            "previous"      :   3,
            "results": -1
        },
        11 : {
            "results": "ICC(1,1,A)",
            "previous":   10,
            "link": "icc11a"
        },
        12 : {
            "results": "ICC(1,k,A)",
            "previous":   10,
            "link": "icc1ka"
        },
        13: {
            "question"      :   "What kind of measurements do you use?",
            "choices"       :   {
                                    "Single measurements: this ICC is an index for the reliability of the ratings for one, typical, single rater.": 14,
                                    "Mean of multiple measurements: this ICC is an index for the reliability of different raters averaged together. This ICC is always higher than the Single measures ICC.": 15
                                },
            "selection"       :   -1,
            "previous"      :   7,
            "results": -1
        }, 
        14: {
            "question"      :   "Absolute agreement or consistency?",
            "choices"       :   {
                                    "Absolute Agreement: if different raters assign the same measurement to the same object (y = x)": 16,
                                    "Consistency: if one rater's score can be equated to another rater's score plus a systematic error (y = x + e)": 17
                                },
            "selection"       :   -1,
            "previous"      :   13,
            "results": -1
        },
        15: {
            "question"      :   "Absolute agreement or consistency?",
            "choices"       :   {
                                    "Absolute Agreement: if different raters assign the same measurement to the same object (y = x)": 18,
                                    "Consistency: if one rater's score can be equated to another rater's score plus a systematic error (y = x + e)": 19
                                },
            "selection"       :   -1,
            "previous"      :   13,
            "results": -1
        },
        16 : {
            "results": "ICC(2,1,A)",
            "previous":   14,
            "link": "icc21A"
        },
        17 : {
            "results": "ICC(1,C)",
            "previous":   14,
            "link": "icc1c"
        },
        18 : {
            "results": "ICC(2,k,A)",
            "previous":   15,
            "link": "icc2kA"
        },
        19 : {
            "results": "ICC(k,C)",
            "previous":   15,
            "link": "icckc"
        },
        20: {
            "question"      :   "Absolute agreement or consistency?",
            "choices"       :   {
                                    "Absolute Agreement: if different raters assign the same measurement to the same object (y = x)": 22,
                                    "Consistency: if one rater's score can be equated to another rater's score plus a systematic error (y = x + e)": 23
                                },
            "selection"       :   -1,
            "previous"      :   8,
            "results": -1
        },
        21: {
            "question"      :   "Absolute agreement or consistency?",
            "choices"       :   {
                                    "Absolute Agreement: if different raters assign the same measurement to the same object (y = x)": 24,
                                    "Consistency: if one rater's score can be equated to another rater's score plus a systematic error (y = x + e)": 25
                                },
            "selection"       :   -1,
            "previous"      :   8,
            "results": -1
        }, 
        22 : {
            "results": "ICC(1,A)",
            "previous":   20,
            "link": "icc1A"
        },
        23 : {
            "results": "ICC(3,1,C)",
            "previous":   20,
            "link": "icc31C"
        },
        24 : {
            "results": "ICC(k,A)",
            "previous":   21,
            "link": "icckA"
        },
        25 : {
            "results": "ICC(3,k,C)",
            "previous":   21,
            "link": "icc3kC"
        },
        27 : {
            "results": "Cohen's Weighted Kappa",
            "previous":   0,
            "link": "weightedkappa"
        },
        28 : {
            "results": "Fleiss' Kappa",
            "previous":   0,
            "link": "fleisskappa"
        }

    };
