FROM apache/kafka:latest
COPY create_topics.sh /opt/create_topics.sh
COPY topics.dat /opt/topics.dat
CMD ["/opt/create_topics.sh", "/opt/topics.dat"]
