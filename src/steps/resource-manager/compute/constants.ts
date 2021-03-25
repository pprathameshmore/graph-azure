import {
  generateRelationshipType,
  RelationshipClass,
} from '@jupiterone/integration-sdk-core';

// Step IDs
export const STEP_RM_COMPUTE_VIRTUAL_MACHINE_IMAGES =
  'rm-compute-virtual-machine-images';
export const STEP_RM_COMPUTE_VIRTUAL_MACHINE_DISKS =
  'rm-compute-virutal-machine-disks';
export const STEP_RM_COMPUTE_VIRTUAL_MACHINES = 'rm-compute-virtual-machines';

export const steps = {
  VIRTUAL_MACHINE_EXTENSIONS: 'rm-compute-virtual-machine-extensions',
};

// Graph object
export const VIRTUAL_MACHINE_ENTITY_TYPE = 'azure_vm';
export const VIRTUAL_MACHINE_ENTITY_CLASS = ['Host'];

export const VIRTUAL_MACHINE_IMAGE_ENTITY_TYPE = 'azure_image';
export const VIRTUAL_MACHINE_IMAGE_ENTITY_CLASS = ['Image'];

export const DISK_ENTITY_TYPE = 'azure_managed_disk';
export const DISK_ENTITY_CLASS = ['DataStore', 'Disk'];

export const entities = {
  VIRTUAL_MACHINE_EXTENSION: {
    _type: 'azure_vm_extension',
    _class: ['Application'],
    resourceName: '[RM] Virtual Machine Extension',
  },
};

export const VIRTUAL_MACHINE_DISK_RELATIONSHIP_CLASS = RelationshipClass.USES;
export const VIRTUAL_MACHINE_DISK_RELATIONSHIP_TYPE = generateRelationshipType(
  VIRTUAL_MACHINE_DISK_RELATIONSHIP_CLASS,
  VIRTUAL_MACHINE_ENTITY_TYPE,
  DISK_ENTITY_TYPE,
);

export const relationships = {
  VIRTUAL_MACHINE_USES_EXTENSION: {
    _type: 'azure_vm_uses_extension',
    sourceType: VIRTUAL_MACHINE_ENTITY_TYPE,
    _class: RelationshipClass.USES,
    targetType: entities.VIRTUAL_MACHINE_EXTENSION._type,
  },
};
