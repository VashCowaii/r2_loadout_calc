const configAbility = {
  "fileName": "4053014_Monster_W4_Manta_Ability05_Part01",
  "childAbilityList": [
    "4053014_Monster_W4_Manta_Ability05_Camera",
    "4053014_Monster_W4_Manta_Ability05_Camera_TimeSlow",
    "4053014_Monster_W4_Manta_Ability05_Part01",
    "4053014_Monster_W4_Manta_Ability05_Part02"
  ],
  "skillTrigger": "Skill05",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Manta_Ability05_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1670308834\">Enemy_W4_Manta_TimeSlow</a>"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}