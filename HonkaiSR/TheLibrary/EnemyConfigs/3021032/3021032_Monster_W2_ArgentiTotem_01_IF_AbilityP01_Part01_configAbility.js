const configAbility = {
  "fileName": "3021032_Monster_W2_ArgentiTotem_01_IF_AbilityP01_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCameraFlag02",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "DeathCamera_First"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "PowerFlag"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "W2_ArgentiTotem_01_BattleScore1"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W2_Argenti_IF_Power_Trigger"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCount02",
        "compareType": "=",
        "value2": 0
      }
    }
  ],
  "references": []
}