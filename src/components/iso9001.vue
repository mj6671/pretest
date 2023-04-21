
<script>

export default {
    data() {
        return {
            scores: []
        }
    },

    created() {
        for (let i = 0; i < 15; i++) {
            this.scores.push(0)
        }

        console.log(this.scores)
    },

    methods: {
        answerScore(scoreIndex, scoreValue) {
            this.scores[scoreIndex] = scoreValue
        },

        scoreDump() {
            console.log(this.scores)
        }
    },
}
</script>

<template>
    <div id="dev">
        <h1>ISO 9001 - Questions</h1>
        <div class="question">
            1. How often do you conduct internal audits?
            <div class="answers">
                <span><input type="radio" name="ques1" @click="this.answerScore(0, 0)"/> a. Never</span>
                <span><input type="radio" name="ques1" @click="this.answerScore(0, 1)"/> b. Once a year</span>
                <span><input type="radio" name="ques1" @click="this.answerScore(0, 2)"/> c. Twice a year</span>
                <span><input type="radio" name="ques1" @click="this.answerScore(0, 3)"/> d. Quarterly</span>
            </div>
        </div>

        <div class="question">
            2. How do you measure customer satisfaction?
            <div class="answers">
                <span><input type="radio" name="ques2" @click="this.answerScore(1, 0)" /> a. We don't measure customer satisfaction</span>
                <span><input type="radio" name="ques2" @click="this.answerScore(1, 1)" /> b. Informal feedback</span>
                <span><input type="radio" name="ques2" @click="this.answerScore(1, 2)" /> c. Formal surveys</span>
                <span><input type="radio" name="ques2" @click="this.answerScore(1, 3)" /> d. Both formal surveys and informal feedback</span>
            </div>
        </div>

        <div class="question">
            3. How often do you review your quality management system?
            <div class="answers">
                <span><input type="radio" name="ques3" @click="this.answerScore(2, 0)" /> a. Rarely</span>
                <span><input type="radio" name="ques3" @click="this.answerScore(2, 1)" /> b. Once a year</span>
                <span><input type="radio" name="ques3" @click="this.answerScore(2, 2)" /> c. Twice a year</span>
                <span><input type="radio" name="ques3" @click="this.answerScore(2, 3)" /> d. Quarterly</span>
            </div>
        </div>

        <div class="question">
            4. How do you ensure that employees are trained to perform their job duties?
            <div class="answers">
                <span><input type="radio" name="ques4" @click="this.answerScore(3, 0)" /> a. No formal training</span>
                <span><input type="radio" name="ques4" @click="this.answerScore(3, 1)" /> b. On-the-job training</span>
                <span><input type="radio" name="ques4" @click="this.answerScore(3, 2)" /> c. Formal training programs</span>
                <span><input type="radio" name="ques4" @click="this.answerScore(3, 3)" /> d. Both on-the-job training and formal training programs</span>
            </div>
        </div>

        <div class="question">
            5. How do you ensure that your suppliers meet your quality requirements?
            <div class="answers">
                <span><input type="radio" name="ques5" @click="this.answerScore(4, 0)" /> a. No formal supplier evaluation process</span>
                <span><input type="radio" name="ques5" @click="this.answerScore(4, 1)" /> b. Informal supplier evaluation process</span>
                <span><input type="radio" name="ques5" @click="this.answerScore(4, 2)" /> c. Formal supplier evaluation process</span>
                <span><input type="radio" name="ques5" @click="this.answerScore(4, 3)" /> d. Both informal and formal supplier evaluation processes</span>
            </div>
        </div>

        <div class="question">
             6. How do you identify and manage risks in your organization?
            <div class="answers">
                <span><input type="radio" name="ques6" @click="this.answerScore(5, 0)" />a. No formal risk management process</span>
                <span><input type="radio" name="ques6" @click="this.answerScore(5, 1)" />b. Informal risk management process</span>
                <span><input type="radio" name="ques6" @click="this.answerScore(5, 2)" />c. Formal risk management process</span>
                <span><input type="radio" name="ques6" @click="this.answerScore(5, 3)" />d. Both informal and formal risk management processes</span>
            </div>
        </div>

        <div class="question">
           7. How do you handle nonconformities in your organization?
            <div class="answers">
                <span><input type="radio" name="ques7" @click="this.answerScore(6, 0)" />a. No formal nonconformity handling process<span>
                <span><input type="radio" name="ques7" @click="this.answerScore(6, 1)" />b. Informal nonconformity handling process </span>
                <span><input type="radio" name="ques7" @click="this.answerScore(6, 2)" />c. Formal nonconformity handling process </span>
                <span><input type="radio" name="ques7" @click="this.answerScore(6, 3)" />d. Both informal and formal nonconformity handling processes</span>
            </div>
        </div>

        <div class="question">
             8. How do you ensure that your processes are efficient and effective?
            <div class="answers">
                <span><input type="radio" name="ques8" @click="this.answerScore(7, 0)" /> a. No formal process improvement process</span>
                <span><input type="radio" name="ques8" @click="this.answerScore(7, 1)" /> b. Informal process improvement process</span>
                <span><input type="radio" name="ques8" @click="this.answerScore(7, 2)" />c. Formal process improvement process</span>
                <span><input type="radio" name="ques8" @click="this.answerScore(7, 3)" />d. Both informal and formal process improvement processes</span>
            </div>
        </div>

        <div class="question">
           9. How do you ensure that your products or services meet customer requirements?
            <div class="answers">
                <span><input type="radio" name="ques9" @click="this.answerScore(8, 0)" /> a. No formal process for identifying customer requirements</span>
                <span><input type="radio" name="ques9" @click="this.answerScore(8, 1)" /> b. Informal process for identifying customer requirements</span>
                <span><input type="radio" name="ques9" @click="this.answerScore(8, 2)" /> c. Formal process for identifying customer requirements</span>
                <span><input type="radio" name="ques9" @click="this.answerScore(8, 3)" />d. Both informal and formal processes for identifying customer requirements</span>
            </div>
        </div>

        <div class="question">
            10. How do you ensure that your products or services are delivered on time?
            <div class="answers">
                <span><input type="radio" name="ques10" @click="this.answerScore(9, 0)" />a. No formal process for tracking delivery times </span>
                <span><input type="radio" name="ques10" @click="this.answerScore(9, 1)" />b. Informal process for tracking delivery times</span>
                <span><input type="radio" name="ques10" @click="this.answerScore(9, 2)" />c. Formal process for tracking delivery times</span>
                <span><input type="radio" name="ques10" @click="this.answerScore(9, 3)" />d. Both informal and formal processes for tracking delivery times</span>
            </div>
        </div>

        <div class="question">
            11. How do you measure the effectiveness of your quality management system?
            <div class="answers">
                <span><input type="radio" name="ques11" @click="this.answerScore(10, 0)" /> a.No formal process for measuring effectiveness</span>
                <span><input type="radio" name="ques11" @click="this.answerScore(10, 1)" /> b. Informal process for measuring effectiveness</span>
                <span><input type="radio" name="ques11" @click="this.answerScore(10, 2)" />c. Formal process for measuring effectiveness</span>
                <span><input type="radio" name="ques11" @click="this.answerScore(10, 3)" />d. Both informal and formal processes for measuring effectiveness</span>
            </div>
        </div>

        <div class="question">
            12. How do you ensure that your documents and records are controlled?
            <div class="answers">
                <span><input type="radio" name="ques12" @click="this.answerScore(11, 0)" />a. No formal document control process</span>
                <span><input type="radio" name="ques12" @click="this.answerScore(11, 1)" />b. Informal document control process</span>
                <span><input type="radio" name="ques12" @click="this.answerScore(11, 2)" />c. Formal document control process</span>
                <span><input type="radio" name="ques12" @click="this.answerScore(11, 3)" />d. Both informal and formal document control processes</span>
            </div>
        </div>

        <div class="question">
           13. How do you ensure that your organization complies with relevant laws and regulations?
            <div class="answers">
                <span><input type="radio" name="ques13" @click="this.answerScore(12, 0)" /> a. No formal process for identifying relevant laws and regulations</span>
                <span><input type="radio" name="ques13" @click="this.answerScore(12, 1)" /> b. Informal process for identifying relevant laws and regulations</span>
                <span><input type="radio" name="ques13" @click="this.answerScore(12, 2)" />c. Formal process for identifying relevant laws and regulations</span>
                <span><input type="radio" name="ques13" @click="this.answerScore(12, 3)" />d. Both informal and formal processes for identifying relevant laws and regulations</span>
            </div>
        </div>

        <div class="question">
            14. How do you measure customer satisfaction?
            <div class="answers">
                <span><input type="radio" name="ques14" @click="this.answerScore(13, 0)" />a. No formal process for identifying customer requirements</span>
                <span><input type="radio" name="ques14" @click="this.answerScore(13, 1)" />b. Informal process for identifying customer requirements</span>
                <span><input type="radio" name="ques14" @click="this.answerScore(13, 2)" />c. Formal process for identifying customer requirements</span>
                <span><input type="radio" name="ques14" @click="this.answerScore(13, 3)" />d. Both informal and formal processes for identifying customer requirements</span>
            </div>
        </div>

        <div class="question">
            15. How do you ensure that your organization complies with industry standards and best practices?
            <div class="answers">
                <span><input type="radio" name="ques15" @click="this.answerScore(14, 0)" /> a. No formal process for identifying industry standards and best practices</span>
                <span><input type="radio" name="ques15" @click="this.answerScore(14, 1)" /> b. Informal process for identifying industry standards and best practices </span>
                <span><input type="radio" name="ques15" @click="this.answerScore(14, 2)" /> c. Formal process for identifying industry standards and best practices</span>
                <span><input type="radio" name="ques15" @click="this.answerScore(14, 3)" /> d. Both informal and formal processes for identifying industry standards </span>
            </div>
        </div>
<!--        
        5. How do you ensure that your suppliers meet your quality requirements?
        a. No formal supplier evaluation process
        b. Informal supplier evaluation process
        c. Formal supplier evaluation process
        d. Both informal and formal supplier evaluation processes
        
        6. How do you identify and manage risks in your organization?
        a. No formal risk management process
        b. Informal risk management process
        c. Formal risk management process
        d. Both informal and formal risk management processes
        
        7. How do you handle nonconformities in your organization?
        a. No formal nonconformity handling process
        b. Informal nonconformity handling process
        c. Formal nonconformity handling process
        d. Both informal and formal nonconformity handling processes
        
        8. How do you ensure that your processes are efficient and effective?
        a. No formal process improvement process
        b. Informal process improvement process
        c. Formal process improvement process
        d. Both informal and formal process improvement processes
        
        9. How do you ensure that your products or services meet customer requirements?
        a. No formal process for identifying customer requirements
        b. Informal process for identifying customer requirements
        c. Formal process for identifying customer requirements
        d. Both informal and formal processes for identifying customer requirements
        
        10. How do you ensure that your products or services are delivered on time?
        a. No formal process for tracking delivery times
        b. Informal process for tracking delivery times
        c. Formal process for tracking delivery times
        d. Both informal and formal processes for tracking delivery times
        
        11. How do you measure the effectiveness of your quality management system?
        a. No formal process for measuring effectiveness
        b. Informal process for measuring effectiveness
        c. Formal process for measuring effectiveness
        d. Both informal and formal processes for measuring effectiveness
        
        12. How do you ensure that your documents and records are controlled?
        a. No formal document control process
        b. Informal document control process
        c. Formal document control process
        d. Both informal and formal document control processes
        
        13. How do you ensure that your organization complies with relevant laws and regulations?
        a. No formal process for identifying relevant laws and regulations
        b. Informal process for identifying relevant laws and regulations
        c. Formal process for identifying relevant laws and regulations
        d. Both informal and formal processes for identifying relevant laws and regulations
        
        14. How do you ensure that your organization complies with customer requirements?
        a. No formal process for identifying customer requirements
        b. Informal process for identifying customer requirements
        c. Formal process for identifying customer requirements
        d. Both informal and formal processes for identifying customer requirements
        
        15. How do you ensure that your organization complies with industry standards and best practices?
        a. No formal process for identifying industry standards and best practices
        b. Informal process for identifying industry standards and best practices
        c. Formal process for identifying industry standards and best practices
        d. Both informal and formal processes for identifying industry standards -->
    </div>

    <button @click="this.scoreDump">Press</button>

</template>

<style scoped>

#dev {
    width: 100vw;
    height: 100vh;
    background-color: #121212;
    color: #dedede;

    box-sizing: border-box;
    padding: 2em;
}

h1 {
    margin: 0;
    padding: 0;
    font-weight: 999;

    margin-bottom: 1.5em;
}

.answers {
    display: flex;
    flex-direction: column;
}

.question {
    font-size: 1.1em;
    margin-bottom: 1em;
}
</style>
