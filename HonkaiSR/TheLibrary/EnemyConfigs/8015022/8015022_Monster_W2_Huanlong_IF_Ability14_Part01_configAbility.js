const configAbility = {
  "fileName": "8015022_Monster_W2_Huanlong_IF_Ability14_Part01",
  "childAbilityList": [
    "8015022_Monster_W2_Huanlong_IF_Ability14_Part01",
    "8015022_Monster_W2_Huanlong_IF_Ability14_Part02",
    "8015022_Monster_W2_Huanlong_IF_Ability14_Camera"
  ],
  "skillTrigger": "Skill14",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "scope": "TargetEntity",
      "variableName": "PartDecisionFlag",
      "value": 1
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_Huanlong_IF_Ability14_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}