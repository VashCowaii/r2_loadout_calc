const configAbility = {
  "fileName": "2033022_Monster_W2_FeixiaoPart_01_IF_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Feixiao: Self}}"
      },
      "scope": "TargetEntity",
      "variableName": "Skill04DamagePercentage",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_29) || RETURN",
        "displayLines": "UnusedUnderThisBase_29",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_29"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self Initial}}"
      },
      "scope": "TargetEntity",
      "variableName": "Skill04DamagePercentage",
      "value": {
        "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
        "displayLines": "UnusedUnderThisBase_3",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_3"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1429897457\">Monster_W2_FeixiaoPart_LockHP</a>"
    }
  ],
  "references": []
}