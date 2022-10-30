import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class FrequencyGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-->0){
            int n =sc.nextInt();
            int arr[] = new int[n];
            for(int i = 0; i < n; i++)
                arr[i] = sc.nextInt();
            Map<Integer,Integer> map = new HashMap<>();
            for(int i = 0; i < n; i++){
                map.put(arr[i], map.getOrDefault(arr[i], 0)+1);
            }
            System.out.println(map);
            int min = Integer.MAX_VALUE;
            int ans = Integer.MIN_VALUE;
            for (Map.Entry<Integer,Integer> ele : map.entrySet()) {
                if(ele.getValue()<=min){
                     min = ele.getValue();
                     ans = Math.max(ans,ele.getKey());
                }
                   
            }
            System.out.println(ans);
        }
    }
}
