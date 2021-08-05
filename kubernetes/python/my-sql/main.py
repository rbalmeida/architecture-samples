import mysql.connector


def main():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="dev01",
        database="auto"
    )
    print(mydb)
    mycursor = mydb.cursor()
    mycursor.execute("select * from customer")

    myresult = mycursor.fetchall()
    for x in myresult:
        print(x)


if __name__ == '__main__':
    main()
