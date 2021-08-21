import java.util.ArrayList;
import java.util.List;

public class GenericList {

    public static void main(String args[]) {

        List<Object> genList = new ArrayList<>();

        genList.add(Integer.valueOf(5));
        genList.add("name");
        genList.add(Double.valueOf(10.0));
        genList.add("rank");

        for (Object obj : genList){
            System.out.println("class: " + obj.getClass() + " | value: " + obj.toString());
        }


    }
}
