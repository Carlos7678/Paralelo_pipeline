pipeline {
    agent any
    
    tools {nodejs "Node"}
    
    stages {
        stage('Cypress Parallel Test Suite') {
            steps {
                git url: 'https://github.com/Carlos7678/Paralelo_pipeline.git'
                script {
                    def agents = ["Agent2_1", "Agent2_2", "Agent2_3", "Agent2_4", "Agent2_5"]
                    def parallelStages = [:]
                    for (int i = 0; i < agents.size(); i++) {
                        def agentLabel = agents[i]
                        parallelStages["Slave ${i + 1}"] = {
                            agent {
                                label agentLabel
                            }
                            steps {
                                bat 'npm install'
                                // Consider removing 'npm update' unless necessary
                                bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                            }
                        }
                    }
                    parallel parallelStages
                }
            }
        }
    }
}
