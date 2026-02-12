const configAbility = {
  "fileName": "4053012_Monster_W4_Manta_Ability03_Part01",
  "childAbilityList": [
    "4053012_Monster_W4_Manta_Ability03_Camera",
    "4053012_Monster_W4_Manta_Ability03_Camera_TimeSlow",
    "4053012_Monster_W4_Manta_Ability03_Part01",
    "4053012_Monster_W4_Manta_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_Manta_Ability03_Part02",
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