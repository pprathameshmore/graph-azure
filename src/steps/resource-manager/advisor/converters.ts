import {
  Entity,
  createIntegrationEntity,
  convertProperties,
  parseTimePropertyValue,
} from '@jupiterone/integration-sdk-core';

import { AzureWebLinker } from '../../../azure';
import { AdvisorEntities } from './constants';
import {
  ResourceRecommendationBase,
  Impact,
} from '@azure/arm-advisor/esm/models';

function maybeConvertToNumber(maybeNumber: string | undefined) {
  if (!isNaN(parseFloat(maybeNumber || 'NaN'))) return parseFloat(maybeNumber!);
}

function getNumericSeverity(impact?: Impact) {
  switch (impact) {
    case 'High':
      return 10;
    case 'Medium':
      return 5;
    case 'Low':
      return 1;

    default:
      return 5;
  }
}

function getTargets(data: ResourceRecommendationBase): string[] {
  const targets: string[] = [];
  if (data.impactedField) targets.push(data.impactedField);
  if (data.impactedValue) targets.push(data.impactedValue);
  return targets;
}

export function createRecommendationEntity(
  webLinker: AzureWebLinker,
  data: ResourceRecommendationBase,
): Entity {
  return createIntegrationEntity({
    entityData: {
      source: data,
      assign: {
        ...convertProperties(data),
        _key: data.id as string,
        _type: AdvisorEntities.RECOMMENDATION._type,
        _class: AdvisorEntities.RECOMMENDATION._class,
        id: data.id,
        name: data.name,
        category: data.category,
        assessment: data.extendedProperties?.assessmentKey,
        severity: data.impact,
        numericSeverity: getNumericSeverity(data.impact),
        score: maybeConvertToNumber(data.extendedProperties?.score),
        impact: data.impact?.toLowerCase(),
        recommendation: data.shortDescription?.solution,
        targets: getTargets(data),
        shortDescriptionProblem: data.shortDescription?.problem,
        shortDescriptionSolution: data.shortDescription?.solution,

        resourceId: data.resourceMetadata?.resourceId,
        source: data.resourceMetadata?.source,
        open: true,
        updatedOn: parseTimePropertyValue(data.lastUpdated),
        webLink: webLinker.portalResourceUrl(data.id),
      },
    },
  });
}
