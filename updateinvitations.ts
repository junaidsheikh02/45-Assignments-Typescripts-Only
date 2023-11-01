# Define your original guest list
guest_list = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Print the initial guest list
print("Initial Guest List:")
for guest in guest_list:
    print(f"Dear {guest}, you are invited to dinner.")

# Name of the guest who can't make it
guest_cant_make_it = "David"
print(f"\nUnfortunately, {guest_cant_make_it} can't make it to the dinner.\n")

# Replace the guest who can't make it with the new guest
new_guest = "Frank"
guest_list[guest_list.index(guest_cant_make_it)] = new_guest

# Print the updated guest list with the new invitation
print("Updated Guest List:")
for guest in guest_list:
    print(f"Dear {guest}, you are invited to dinner.")

# Inform about the bigger dinner table
print("\nGreat news! We found a bigger dinner table and can invite more guests!\n")

# Add new guests
new_guests = ["Grace", "Henry", "Isabel"]
guest_list.insert(0, new_guests[0])  # Add at the beginning
guest_list.insert(len(guest_list) // 2, new_guests[1])  # Add in the middle
guest_list.append(new_guests[2])  # Add at the end

# Print new invitation messages
print("Updated Guest List with Additional Guests:")
for guest in guest_list:
    print(f"Dear {guest}, you are invited to dinner.")
