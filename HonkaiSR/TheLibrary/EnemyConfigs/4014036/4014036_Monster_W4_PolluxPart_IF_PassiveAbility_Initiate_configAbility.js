const configAbility = {
  "fileName": "4014036_Monster_W4_PolluxPart_IF_PassiveAbility_Initiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_PolluxPart_IF_Status"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_W4_PolluxPart_IF_MinionsSuperArmorController",
      "valuePerStack": {
        "MDF_MinionsSuperArmor_AllDamageReduce": {
          "operator": "Variables[0] (UnusedUnderThisBase_120) || RETURN",
          "displayLines": "UnusedUnderThisBase_120",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_120"
          ]
        },
        "MDF_MinionsSuperArmor_AllDamageTypeTakenRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_121) || RETURN",
          "displayLines": "UnusedUnderThisBase_121",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_121"
          ]
        },
        "MDF_SetActionDelayValue": {
          "operator": "Variables[0] (UnusedUnderThisBase_122) || RETURN",
          "displayLines": "UnusedUnderThisBase_122",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_122"
          ]
        }
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "scope": "TargetEntity",
      "variableName": "StanceDamagePreshowValue",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_107) || RETURN",
        "displayLines": "UnusedUnderThisBase_107",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_107"
        ]
      }
    }
  ],
  "references": []
}