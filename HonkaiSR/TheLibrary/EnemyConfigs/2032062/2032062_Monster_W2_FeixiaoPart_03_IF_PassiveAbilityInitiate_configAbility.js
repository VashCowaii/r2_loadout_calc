const configAbility = {
  "fileName": "2032062_Monster_W2_FeixiaoPart_03_IF_PassiveAbilityInitiate",
  "skillTrigger": "Passive01",
  "abilityType": "Talent",
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
      "value": {
        "displayLines": "{[Skill02[0]]}"
      },
      "variableName": "Skill06DamagePercentage"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Nebula Devourer: Self Initial}}"
      },
      "scope": "TargetEntity",
      "value": {
        "displayLines": "{[Skill01[0]]}"
      },
      "variableName": "Skill06DamagePercentage"
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
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}