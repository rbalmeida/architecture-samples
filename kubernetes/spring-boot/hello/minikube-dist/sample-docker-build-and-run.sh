cp ../target/*.jar .
sudo docker build --build-arg JAR_FILE=*.jar -t rbalmeida/spring-hello .
sudo docker run --rm -p 8080:8080 rbalmeida/spring-hello
