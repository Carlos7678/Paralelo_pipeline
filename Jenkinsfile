pipeline {
    agent any
 
    tools {nodejs "node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    
                    }
                }

                    stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    
                    }
                }

                    stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    
                    }
                }

                    stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    
                    }
                }

                    stage('Slave 5') {
                    agent {
                        label "Agent2_5"
                    }
                    steps {
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    
                    }
                }





                
 
    
 
               
  
                  
            }
 
             
        }
 
    }
            
}