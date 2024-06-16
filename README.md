# hashMap

hashMap is a data structure that runs on average case of 0(1) </br> 
but runs 0(n) in worst case because of the use of linkedLists. </br>
concept such as hashing, growth, handling collission are crucial to finish this project.

## methods 
hash(key) returns a hashCode </br>
</br>
set(key, value) insertion, handling collision, updating values within linkedLists as a bucket, </br>
</br>
get(key) returns this key value otherwise return null</br>
</br>
has(key) returns true if buckets has this key false otherwise.</br>
</br>
remove(key) returns true if it was successfully removed otherwise does not exist then return false</br>
</br>
length() returns the number of stored keys in the buckets. </br>
</br>
clear() clear all entries and return true. </br>
</br>
keys() returns an array that contain all keys stored in buckets. </br>
values() returns an array that contain all values stored in buckets.</br>
</br>
entries() returns an array that contain all key value pair within an array. </br>
</br>

## hashSet

behaves likes hashMap only does not contain values.

### note

remove method like get(key) values since it doesn't contain value.
