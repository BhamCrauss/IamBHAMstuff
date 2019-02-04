price = float(input("Enter Gas Price>"))
p = price + (.009)

#print (x,"$")

#n = int(input("Enter Gas Price>"))

#def Even(n):
 #   Even = False
  #  x=1
   # while x <=1000 and int(n*x)%2 == 0:
    #    x = x*10
     #   if x == 1000:
      #      even =True
       #     return (Even) 



x = 0
while x <= 60.00:
    if int(x/10)%2 == 0 and int(x)%2 == 0 and int(x*10)%2 == 0 and int(x*100)%2 == 0 :
        g = round(x / p, 3)
        if int(g/10)%2 == 0 and int(g)%2 == 0 and int(g*10)%2 == 0 and int(g*100)%2 == 0 and int(g*1000)%2 == 0:
            print(round(x,2),"$  " , "=", round(x/p,3),"gallons")
    x = round(x + 0.02,2)

