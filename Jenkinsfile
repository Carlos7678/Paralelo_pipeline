pipeline {
    agent none

    tools { nodejs "node" }

    stages {
        stage('Setup Agent') {
            agent any
            steps {
                script {
                    // Descargar y registrar el agente principal
                    echo 'Descargando y configurando el agente...'
                    bat """
                    curl.exe -sO http://localhost:8080/jnlpJars/agent.jar
                    start /B java -jar agent.jar -url http://localhost:8080/ -secret f8ecf20be54f79778c599e70123e5144ef4c9a7b9d818b9ddd7173854941d986 -name Agent2 -webSocket -workDir "/home/"
                    """
                    
                    // Guardar el PID del agente en un archivo
                    echo 'Obteniendo el PID del proceso del agente...'
                    bat """
                    for /F "tokens=2" %%a in ('tasklist /fi "imagename eq java.exe" /fo csv | find "agent.jar"') do echo %%a > agent_pid.txt
                    """
                    
                    // Mostrar el contenido del archivo para depuración
                    echo 'Contenido de agent_pid.txt:'
                    bat "type agent_pid.txt"
                    
                    // Validar que el archivo no está vacío
                    script {
                        def pid = readFile('agent_pid.txt').trim()
                        if (pid == "") {
                            error "No se pudo obtener el PID del agente. Verifica la configuración del agente."
                        }
                    }
                }
            }
        }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2_1" }
                    steps {
                        script {
                            echo "Ejecutando pruebas en Slave 1..."
                        }
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    }
                }

                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        script {
                            echo "Ejecutando pruebas en Slave 2..."
                        }
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    }
                }

                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        script {
                            echo "Ejecutando pruebas en Slave 3..."
                        }
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    }
                }

                stage('Slave 4') {
                    agent { label "Agent2_4" }
                    steps {
                        script {
                            echo "Ejecutando pruebas en Slave 4..."
                        }
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    }
                }

                stage('Slave 5') {
                    agent { label "Agent2_5" }
                    steps {
                        script {
                            echo "Ejecutando pruebas en Slave 5..."
                        }
                        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '6a33cade-aa5d-4f7d-ad26-e5b454b84d1d', url: 'https://github.com/Carlos7678/Paralelo_pipeline.git']])
                        bat 'npm install'
                        bat 'npx cypress run --record --key 33589a7b-9669-4887-b876-3a368e060a29 --parallel'
                    }
                }
            }
        }

        stage('Teardown Agent') {
            agent any
            steps {
                script {
                    echo 'Limpiando recursos del agente...'
                    
                    // Leer el PID y terminar el proceso
                    bat """
                    for /F %%a in (agent_pid.txt) do taskkill /PID %%a /F
                    del agent_pid.txt
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Pipeline terminado. Verificando procesos restantes...'
                bat "tasklist /v | findstr java.exe"
            }
        }
        failure {
            echo 'El pipeline falló. Verifica los logs anteriores para más detalles.'
        }
    }
}
