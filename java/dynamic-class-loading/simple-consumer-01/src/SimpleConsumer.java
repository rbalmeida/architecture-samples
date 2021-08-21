import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.Arrays;

public class SimpleConsumer {

    public static void main(String args[])
            throws MalformedURLException,
            InstantiationException,
            IllegalAccessException,
            ClassNotFoundException,
            NoSuchMethodException,
            InvocationTargetException {

        URL jarFileURL;
        jarFileURL = new URL("file:/home/ralmeida/git/simple-lib-01/out/artifacts/simple_lib_01_jar/simple-lib-01.jar");
        URL[] urls = { jarFileURL };
        URLClassLoader classLoader = new URLClassLoader(urls);
        

        Class<?> myClass = classLoader.loadClass("SimpleClass01");
        Object obj1 = myClass.getDeclaredConstructor().newInstance();

        Object result = myClass.getMethod("sayHello").invoke(obj1);

        System.out.println("result: " + result);

    }
}
