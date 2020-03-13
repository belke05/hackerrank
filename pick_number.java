import java.util.*;

class Result {
    public static Integer pickingNumbers(List<Integer> a) {
        HashMap<Integer, Integer> number_count = new HashMap<Integer, Integer>();
        for (int i = 0; i < a.size(); i++) {
            if (number_count.containsKey(a.get(i))) {
                number_count.put(a.get(i), number_count.get(a.get(i)) + 1);
            } else {
                number_count.put(a.get(i), 1);
            }
        }
        List<Integer> unique_keys = new ArrayList<Integer>(number_count.keySet());
        Integer highest_count = 0;
        Integer total = 0;
        for (int i = 0; i < unique_keys.size(); i++) {
            Integer unique_number = unique_keys.get(i);
            Integer mid_number = number_count.get(unique_number);
            total = number_count.getOrDefault(unique_number + 1, 0) + mid_number;
            if (total > highest_count) {
                highest_count = total;
            }

        }
        return highest_count;
    }

}