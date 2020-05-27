// Step IDs
export const STEP_RM_NETWORK_PUBLIC_IP_ADDRESSES = "rm-network-ip-addresses";
export const STEP_RM_NETWORK_INTERFACES = "rm-network-interfaces";
export const STEP_RM_NETWORK_SECURITY_GROUPS = "rm-network-security-groups";
export const STEP_RM_NETWORK_VIRTUAL_NETWORKS = "rm-network-virtual-networks";
export const STEP_RM_NETWORK_LOAD_BALANCERS = "rm-network-load-balancers";

// Graph objects
export const VIRTUAL_NETWORK_ENTITY_TYPE = "azure_vnet";
export const VIRTUAL_NETWORK_ENTITY_CLASS = "Network";

export const SECURITY_GROUP_ENTITY_TYPE = "azure_security_group";
export const SECURITY_GROUP_ENTITY_CLASS = "Firewall";

export const SUBNET_ENTITY_TYPE = "azure_subnet";
export const SUBNET_ENTITY_CLASS = "Network";

export const PUBLIC_IP_ADDRESS_ENTITY_TYPE = "azure_public_ip";
export const PUBLIC_IP_ADDRESS_ENTITY_CLASS = "IpAddress";

export const NETWORK_INTERFACE_ENTITY_TYPE = "azure_nic";
export const NETWORK_INTERFACE_ENTITY_CLASS = "NetworkInterface";

export const LOAD_BALANCER_ENTITY_TYPE = "azure_lb";
export const LOAD_BALANCER_ENTITY_CLASS = "Gateway";

export const SECURITY_GROUP_NIC_RELATIONSHIP_TYPE =
  "azure_security_group_protects_nic";

export const SECURITY_GROUP_SUBNET_RELATIONSHIP_TYPE =
  "azure_security_group_protects_subnet";

export const SECURITY_GROUP_RULE_RELATIONSHIP_TYPE =
  "azure_security_group_rule";

export const VIRTUAL_NETWORK_SUBNET_RELATIONSHIP_TYPE =
  "azure_vnet_contains_subnet";

export const LOAD_BALANCER_BACKEND_NIC_RELATIONSHIP_TYPE =
  "azure_lb_connects_nic";