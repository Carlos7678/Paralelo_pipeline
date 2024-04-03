pipeline {
    agent any
 
    tools {nodejs "Node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agente2_1"
                    }
                    steps {
                        git url: 'https://github.com/Carlos7678/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29  --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agente2_2"
                    }
                    steps {
                        git url: 'https://github.com/Carlos7678/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29  --parallel'
                    
                    }
                }
 
                stage('Slave 3') {
                    agent {
                        label "Agente2_3"
                    }
                    steps {
                        git url: 'https://github.com/Carlos7678/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29  --parallel'
                    
                    }
                }
 
                stage('Slave 4') {
                    agent {
                        label "Agente2_4"
                    }
                    steps {
                        git url: 'https://github.com/Carlos7678/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29  --parallel'
                    
                    }
                }

                  stage('Slave 5') {
                    agent {
                        label "Agente2_5"
                    }
                    steps {
                        git url: 'https://github.com/Carlos7678/Paralelo_pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29  --parallel'
                    
                    }
                }
 
               
 
                
   
                  
            }
 
             
        }
 
    }
            
}