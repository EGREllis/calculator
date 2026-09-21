#!/bin/bash

while read topic; do
  echo "Creating topic: $topic"
  /opt/kafka/bin/kafka-topics.sh --create --bootstrap-server "kafka:9092" --topic "$topic" --partitions 1 --replication-factor 1 --if-not-exists
done < "$1" 
