const configAbility = {
  "fileName": "2032062_Monster_W2_FeixiaoPart_02_IF_PassiveAbilityInitiate",
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
      "variableName": "Skill05DamagePercentage",
      "value": {
        "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
        "displayLines": "{[Skill02[0]]}",
        "constants": [],
        "variables": [
          "{[Skill02[0]]}"
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
      "variableName": "Skill05DamagePercentage",
      "value": {
        "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
        "displayLines": "{[Skill01[0]]}",
        "constants": [],
        "variables": [
          "{[Skill01[0]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}