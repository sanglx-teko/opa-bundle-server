package rbac.authz

# Policy decisions are made using the following input
#   Not part of the policy but good as documentation
# input = {
#     "user": "bob",
#     "action": "read",
#     "object": "server123"
# }

# user-role assignments
# user_roles = data.bundle.user.role

# role-permissions assignments
# role_permissions = data.bundle.role.permission
# logic that implements RBAC.
bundle_name = sprintf("bundle_%v", [input.name])

default allow = false
allow {
    # lookup the list of roles for the user
    # trace(name)
    roles := data[bundle_name].user.role[input.user]
    # for each role in that list
    r := roles[_]
    # lookup the permissions list for role r
    permissions := data[bundle_name].role.permission[r]
    # for each permission
    p := permissions[_]
    # check if the permission granted to r matches the user's request
    p == {"action": input.action, "object": input.object}
}
