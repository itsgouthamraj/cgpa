import React, { Component } from 'react';
import './grid.css';

const subjects_master = [








]

const Sem = (props) => {

    let a = 5;
    return (
        <div>

        </div>
    )
}



export default class CGPA extends Component {

    constructor(props) {
        super(props);
        this.state = {

            subs: [
                [{
                    name: "Communicative English",
                    sem: 1,
                    branch: "CSIT",
                    credit: 3,
                    grade: '',
                },
                {
                    name: "Mathematics – I",
                    sem: 1,
                    branch: "CSIT",
                    credit: 4,
                    grade: '',
                },
                {
                    name: "Applied Physics",
                    sem: 1,
                    branch: "CSIT",
                    credit: 4,
                    grade: '',
                },
                {
                    name: "Chemistry of Materials",
                    sem: 1,
                    branch: "CSIT",
                    credit: 4,
                    grade: '',
                },
                {
                    name: "Fundamentals of Computing",
                    sem: 1,
                    branch: "CSIT",
                    credit: 4,
                    grade: '',
                },
                {
                    name: "Communication Skills Laboratory (Language)",
                    sem: 1,
                    branch: "CSIT",
                    credit: 2,
                    grade: '',
                },
                {
                    name: "Computing Laboratory",
                    sem: 1,
                    branch: "CSIT",
                    credit: 2,
                    grade: '',
                },
                ],
                [
                    {
                        name: "Technical Communication",
                        sem: 2,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Discrete Mathematics",
                        sem: 2,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Mathematics – II",
                        sem: 2,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Digital Systems",
                        sem: 2,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Programming in C",
                        sem: 2,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Digital Systems Laboratory",
                        sem: 2,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                    {
                        name: "Programming in C Laboratory",
                        sem: 2,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                ],
                [
                    {
                        name: "Mathematics - III",
                        sem: 3,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Data Structures",
                        sem: 3,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "DBMS",
                        sem: 3,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Microprocessors",
                        sem: 3,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "C++",
                        sem: 3,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Data Structures Laboratory",
                        sem: 3,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                    {
                        name: "DBMS Laboratory",
                        sem: 3,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                    {
                        name: "OOPS LAB",
                        sem: 3,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                ],
                [
                    {
                        name: "Combinatorics and Graph Theory",
                        sem: 4,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Computer Architecture",
                        sem: 4,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Java and Internet Programming",
                        sem: 4,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Operating Systems",
                        sem: 4,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Theory of Computation",
                        sem: 4,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Cryptography and Data Security",
                        sem: 4,
                        branch: "CS",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Java Lab",
                        sem: 4,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                    {
                        name: "Operating Systems Lab",
                        sem: 4,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                    {
                        name: "XML Lab",
                        sem: 4,
                        branch: "IT",
                        credit: 2,
                        grade: '',
                    },
                ],
                [
                    {
                        name: "Applied Statistics",
                        sem: 5,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Computer Networks",
                        sem: 5,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Design and Analysis of Algorithms",
                        sem: 5,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Software Engineering",
                        sem: 5,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Data Mining",
                        sem: 5,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "VISUAL PROGRAMMING",
                        sem: 5,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Data Mining Laboratory",
                        sem: 5,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                    {
                        name: "GUI Applications Laboratory",
                        sem: 5,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                ],
                [
                    {
                        name: "Probability, Queuing Theory and Reliability",
                        sem: 6,
                        branch: "CSIT",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Network Programming",
                        sem: 6,
                        branch: "CS",
                        credit: 4,
                        grade: '',
                    },
                    {
                        name: "Computer Graphics",
                        sem: 6,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Object Oriented Analysis and Design",
                        sem: 6,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Network Management",
                        sem: 6,
                        branch: "IT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "EVS",
                        sem: 6,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Information Coding Techniques",
                        sem: 6,
                        branch: "CSIT",
                        credit: 3,
                        grade: '',
                    },
                    {
                        name: "Case Tools Laboratory",
                        sem: 6,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                    {
                        name: "Computer Graphics Laboratory",
                        sem: 6,
                        branch: "CSIT",
                        credit: 2,
                        grade: '',
                    },
                ],
                [
                    {
                        name: "Industrial Project",
                        sem: 7,
                        branch: "CSIT",
                        credit: 16,
                        grade: '',
                    },
                ]

            ],
            branch: 'NOT',
            sem: 0,
            gpa: [],
            cgpa: {
                tC: 0,
                tG: 0,
                tVal: 0.0
            },
            result: false
        }

    }

    selBranch = (branch) => {
        this.setState({
            branch
        })
    }

    calcCgpa = () => {
        let cgpa = this.state.cgpa;
        cgpa.cgpa = cgpa.tG / cgpa.tC;
        this.setState({
            cgpa,
            result: true
        })
    }

    calcGpa = () => {
        let gpas = this.state.gpa;

        let curGpa = 0;
        let tempGrades = 0;
        let tempCredits = 0;

        let flag = true;
        let cs = this.state.sem;
        let cur_sem = this.state.subs[this.state.sem];
        for (let sub of cur_sem) {
            if (sub.branch === 'CSIT' || sub.branch === this.state.branch) {
                if (sub.grade === 'O') {
                    tempGrades += 10 * sub.credit;
                    tempCredits += sub.credit;
                }
                if (sub.grade === 'A+') {
                    tempGrades += 9 * sub.credit;
                    tempCredits += sub.credit;
                }
                if (sub.grade === 'A') {
                    tempGrades += 8 * sub.credit;
                    tempCredits += sub.credit;
                }
                if (sub.grade === 'B+') {
                    tempGrades += 7 * sub.credit;
                    tempCredits += sub.credit;
                }
                if (sub.grade === 'B') {
                    tempGrades += 6 * sub.credit;
                    tempCredits += sub.credit;
                }
                if (sub.grade === '') {
                    flag = false;
                    alert(`Please select grade from ${sub.name}`);
                    break;
                }
                if (sub.grade === 'RA' || sub.grade === 'NE') {
                    if (cs < 5) {
                        let subsA = this.state.subs;
                        subsA[cs + 2].push(sub);
                        this.setState({
                            subs: subsA
                        })
                    }
                }
            }

        }

        if (flag === true) {
            let cgpa = this.state.cgpa;
            cgpa.tG += tempGrades;
            cgpa.tC += tempCredits;
            curGpa = tempGrades / tempCredits;
            gpas[this.state.sem] = curGpa;
            cs += 1;
            this.setState({
                sem: cs,
                gpa: gpas,
                cgpa
            }, () => {
                if (this.state.sem === 7) {
                    this.calcCgpa();
                }
            })
        }
    }

    selectGrade = (sub_key, grade) => {

        let arr_sub = this.state.subs;

        arr_sub[this.state.sem][sub_key]['grade'] = grade;
        this.setState({
            subs: arr_sub,
        })
    }

    render() {

        let sem_gpas = this.state.gpa.map((gp, gpi) => {
            return (
                <div className="sem-res">
                    Semester {gpi + 1} - {Math.round((gp + Number.EPSILON) * 100) / 100}
                </div>
            )
        })



        return (
            <div className="container">
                <div className="header">
                    CGPA Calculator
                </div>
                <div className="row">
                    {
                        (this.state.branch === 'NOT') ? <>
                            <div className="c-con col-xs-12 col-md-6 col-md-offset-3">
                                <button onClick={() => { this.selBranch('CS') }} className="b-sel">
                                    CS
                        </button>
                            </div>

                            <div className="c-con col-xs-12 col-md-6 col-md-offset-3">

                                <button onClick={() => { this.selBranch('IT') }} className="b-sel">
                                    IT
                        </button>
                            </div>
                        </> :
                            <>
                                <div className="c-con col-xs-12 col-md-6 col-md-offset-3">

                                    {
                                        this.state.sem < 7 ? <h1 className="c-con">
                                            Semester - {this.state.sem + 1}
                                        </h1> :
                                            <></>
                                    }
                                    {
                                        this.state.sem < 7 ? this.state.subs[this.state.sem].map((sub, subkey) => {

                                            if (sub.branch === 'CSIT' || sub.branch === this.state.branch) {
                                                return (
                                                    <div className="t-l">

                                                        <p className="sub-name">
                                                            {sub.name}
                                                        </p>
                                                        <div className="gradebox">
                                                            <div onClick={() => { this.selectGrade(subkey, "O") }} className={sub.grade === "O" ? "gr gr-s" : "gr"}>O</div>
                                                            <div onClick={() => { this.selectGrade(subkey, "A+") }} className={sub.grade === "A+" ? "gr gr-s" : "gr"}>A+</div>
                                                            <div onClick={() => { this.selectGrade(subkey, "A") }} className={sub.grade === "A" ? "gr gr-s" : "gr"}>A</div>
                                                            <div onClick={() => { this.selectGrade(subkey, "B+") }} className={sub.grade === "B+" ? "gr gr-s" : "gr"}>B+</div>
                                                            <div onClick={() => { this.selectGrade(subkey, "B") }} className={sub.grade === "B" ? "gr gr-s" : "gr"}>B</div>
                                                            <div onClick={() => { this.selectGrade(subkey, "RA") }} className={sub.grade === "RA" ? "gr gr-s" : "gr"}>RA</div>
                                                            {
                                                                sub.sem - 1 !== this.state.sem ? <div onClick={() => { this.selectGrade(subkey, "NE") }} className={sub.grade === "NE" ? "gr gr-s" : "gr"}>NE</div> : <></>
                                                            }
                                                        </div>
                                                    </div>
                                                )

                                            }


                                        }) : <></>


                                    }
                                    <div className="gradebox">
                                        {/* {
                                            this.state.sem>0 ? <button className="act-but">Back</button> : <></>
                                        } */}
                                        {
                                            this.state.sem < 6 ? <button onClick={this.calcGpa} className="act-but">Next</button> : <></>
                                        }
                                        {
                                            this.state.sem == 6 ? <button onClick={this.calcGpa} className="act-but">Submit</button> : <></>
                                        }
                                    </div>

                                    {
                                        (this.state.result === true) ?
                                            <div className="result">
                                                <div className="cgpa">
                                                    {Math.round((this.state.cgpa.cgpa + Number.EPSILON) * 100) / 100}
                                                </div>
                                                <div className="cgpa-h">
                                                    CGPA
                                </div>
                                                {sem_gpas}
                                            </div>
                                            :
                                            <>
                                            </>
                                    }
                                </div>
                            </>
                    }




                </div>
            </div>
        )
    }
}