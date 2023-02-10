# Instructions from program:
puts "I dare you to start typing..."
# This is what you have typed in:
user_types = gets.chomp
# And this is what the bastard has spat out:
# puts user_types.gsub!(/and/, "buggeration")
# puts user_types.gsub!(".", "?!!") # (/and/, "buggeration")

map = {"and" => "buggeration", "." => "?!!"}
map.each {|k,v| user_types.gsub!(k,v)}
puts "Here is your output:" + "\n" + user_types